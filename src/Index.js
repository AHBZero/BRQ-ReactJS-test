// pages/index.js
import { Box, Flex, Grid } from '@chakra-ui/react';
import { CountryProvider, useCountry } from '../src/CountryContext';
import CountryCard from '../src/CountryCard';

const Home = () => {
  const { countries } = useCountry();

    return (
        <Box p={4}>
              <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
                      {countries.map((country) => (
                                <CountryCard key={country.cca3} country={country} />
                                        ))}
                                              </Grid>
                                                  </Box>
                                                    );
                                                    };

                                                    const App = () => (
                                                      <CountryProvider>
                                                          <Flex direction="column" align="center">
                                                                <Home />
                                                                    </Flex>
                                                                      </CountryProvider>
                                                                      );

                                                                      export default App;
                                                                      