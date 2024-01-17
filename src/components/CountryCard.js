// CountryCard.js
import { Box, Image, Text } from '@chakra-ui/react';

const CountryCard = ({ country }) => {
  return (
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4}>
            <Image src={country.flags.png} alt={country.name.common} mb={4} />
                  <Text fontWeight="bold" fontSize="lg" mb={2}>
                          {country.name.common}
                                </Text>
                                      <Text>
                                              Capital: {country.capital[0]}
                                                      <br />
                                                              Population: {country.population}
                                                                      <br />
                                                                              Currency: {country.currencies[0]}
                                                                                    </Text>
                                                                                        </Box>
                                                                                          );
                                                                                          };

                                                                                          export default CountryCard;
                                                                                          I'm