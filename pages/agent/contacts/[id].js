import React from 'react';
import AgentLayout from "../../../components/_App/AgentLayout";

import { ApolloClient, InMemoryCache } from '@apollo/client';
import Link from 'next/link';
import { faPencilSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, MoneyIcon } from '@fortawesome/react-fontawesome'
import { GET_CONTACT_BY_ID, GET_ALL_CONTACT_IDS } from '../../../graphql/agent/queries';

import Footer from '../../../components/_App/Footer';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { DateTime } from 'luxon';
import { Container } from '@mui/system';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Grid,
    Box,
    Tab,
    Typography,
    Card,
    CardContent,
    Avatar,
} from '@mui/material';
import {
    TabContext,
    TabList,
    TabPanel,
} from '@mui/lab';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
});


export default function Contact({ contact }) {

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

        return (
        <>
            <AgentLayout>
            <Container>
            <Grid container>
                <Grid item md={3} xs={12}>
                    <Box>
                    <div className="page-title-content text-start">
                        <ul>
                            <li><Link href="/agent/contacts" activeClassName="active"><a>Back to Contacts</a></Link></li>
                        </ul>
                        <ul>
                            <li><h3>{contact.attributes.firstName} {contact.attributes.lastName}</h3></li>
                            <li><p>{contact.attributes.company.data.attributes.companyName}</p></li>
                            <li><p>{contact.attributes.emailPrimary}</p></li>
                        </ul>
                        <ul>
                            <li><FontAwesomeIcon icon={faPencilSquare} /></li>
                            <li><FontAwesomeIcon icon={faPencilSquare} /></li>
                            <li><FontAwesomeIcon icon={faPencilSquare} /></li>
                            <li><FontAwesomeIcon icon={faPencilSquare} /></li>
                        </ul>
                    </div>
                    </Box>
                    <Box>
                        <div className="portfolio-details-info">
                            <ul>
                                <li>
                                    <span>First Name</span>
                                    <a>{contact.attributes.firstName}</a>
                                </li>
                                <li>
                                    <span>Last Name</span>
                                    {contact.attributes.lastName}
                                </li>
                                <li>
                                    <span>Email</span>
                                    {contact.attributes.emailPrimary}
                                </li>
                                <li>
                                    <span>Mobile Phone</span>
                                    {contact.attributes.mobilePhone}
                                </li>
                                <li>
                                    <span>Website:</span>
                                    <a href="https://envytheme.com/" target="_blank">EnvyTheme.com</a>
                                </li>
                            </ul>
                        </div>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box>
                        <TabContext value={value}>
                            <Box>
                                <TabList aria-label='ContactTabs' onChange={handleChange}>
                                    <Tab label='Overview' value='1' />
                                    <Tab label='Activities' value='2' />
                                </TabList>
                            </Box>
                            <TabPanel value='1'>
                                <Box>
                                    Overview Box
                                </Box>
                            </TabPanel>
                            <TabPanel value='2'>
                                <Box>
                                    {contact.attributes.activities.data.map((val, i) => {
                                    <Card key={i}>
                                        <CardContent>
                                            <Grid container>
                                                <Grid item>
                                                    <Typography color="textSecondary" gutterBottom variant="overline">
                                                        {val.attributes.updatedAt}
                                                    </Typography>
                                                    <Typography color="textPrimary" variant="h4">
                                                        $24k
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                    })}
                                </Box>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
                <Grid item md={3} xs={12}><Box>
                    <Accordion allowZeroExpanded>
                                <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Companies
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    

                                                <p>{contact.attributes.company.data.attributes.companyName}</p>
                                        
                                    
                                </AccordionItemPanel>
                                </AccordionItem>
                    </Accordion>
                </Box></Grid>
                </Grid>
            </Container>
            </AgentLayout>
        </>
        );
};

export async function getStaticPaths() {

    const { data } = await client.query({ query: GET_ALL_CONTACT_IDS });

    const paths = data.contacts.data.map((contact) => {
        return { params: { id: contact.id } }
    })  ;

    console.log(paths);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const { data } = await client.query({
        query: GET_CONTACT_BY_ID,
        variables: { id: params.id }
    });

    const attrs = data.contact.data.attributes;

//    const html = await serialize(attrs.content);

    return {
        props: {
            contact: data.contact.data
          }
    }
}

