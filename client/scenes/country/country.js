import React from "react";
import { useEffect, useState } from "react";
import { getCode } from "country-list";
import getCountryIso3 from "country-iso-2-to-3";
import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

import axios from 'axios';
function Country() {
    const [author, setAuthor] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5001/getAuthorList')
            .then(author => setAuthor(author.data))
            .catch(err => console.log(err))
    }, [])

    const mappedLocations = author.reduce((acc, { country }) => {
        console.log(getCode('Russia'))
        const countryISO3 = getCountryIso3(getCode(country));
        if (!acc[countryISO3]) {
            acc[countryISO3] = 0;
        }
        acc[countryISO3]++;
        return acc;
    }, {});

    const formattedLocations = Object.entries(mappedLocations).map(
        ([country, count]) => {
            return { id: country, value: count };
        }
    );

    const theme = useTheme();
    const data = formattedLocations;

    return (
        <Box m="1.5rem 2.5rem" sx={{
            width: "1100px"
        }}>
            <h1> Geoghraphy</h1>
            <Box
                mt="40px"
                height="75vh"
                border={`1px solid ${theme.palette.secondary[200]}`}
                borderRadius="4px"
            >
                {data ? (
                    <ResponsiveChoropleth
                        data={data}
                        theme={{
                            axis: {
                                domain: {
                                    line: {
                                        stroke: theme.palette.secondary[200],
                                    },
                                },
                                legend: {
                                    text: {
                                        fill: theme.palette.secondary[200],
                                    },
                                },
                                ticks: {
                                    line: {
                                        stroke: theme.palette.secondary[200],
                                        strokeWidth: 1,
                                    },
                                    text: {
                                        fill: theme.palette.secondary[200],
                                    },
                                },
                            },
                            legends: {
                                text: {
                                    fill: theme.palette.secondary[200],
                                },
                            },
                            tooltip: {
                                container: {
                                    color: theme.palette.primary.main,
                                },
                            },
                        }}
                        features={geoData.features}
                        margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
                        domain={[0, 60]}
                        unknownColor="#666666"
                        label="properties.name"
                        valueFormat=".2s"
                        projectionScale={150}
                        projectionTranslation={[0.45, 0.6]}
                        projectionRotation={[0, 0, 0]}
                        borderWidth={1.3}
                        borderColor="#ffffff"
                        legends={[
                            {
                                anchor: "bottom-right",
                                direction: "column",
                                justify: true,
                                translateX: 0,
                                translateY: -125,
                                itemsSpacing: 0,
                                itemWidth: 94,
                                itemHeight: 18,
                                itemDirection: "left-to-right",
                                itemTextColor: theme.palette.secondary[200],
                                itemOpacity: 0.85,
                                symbolSize: 18,
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemTextColor: theme.palette.background.alt,
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]}
                        colors={["gold", "orange", "teal", "aqua", "blue", "olive", "royal blue", "green", "brown", "pink"]}
                    />
                ) : (
                    <>Loading...</>
                )}
            </Box>
        </Box>
    );


}

export default Country;