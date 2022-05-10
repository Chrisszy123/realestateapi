import Image from 'next/image'
import Link from 'next/link'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '../utils/fetchApi'
import Property from '../components/Property'

const Banner = (props) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItem="center" m="10" >
    {props.purpose}
    <Image 
      src="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4" 
      width={500} 
      height={300} 
      />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{props.purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{props.title1} <br /> {props.title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{props.desc1} <br /> {props.desc2} </Text>
      <Button fontSize="xl">
        <Link href="/search?purpose=for-rent">
          Explore renting
        </Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({propertiesForRent, propertiesForSale}) {
  return (
    <div> 
      <Banner 
        purpose= "" 
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="explore renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        
      />
      <Flex  flexWrap="wrap">
        {propertiesForRent.map((property) => (<Property property={property} key={property.id}/>))}
      </Flex>
      <Banner 
        purpose= "" 
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="explore renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        />
        <Flex  flexWrap="wrap">
        {propertiesForSale.map((property) => (<Property property={property} key={property.id}/>))}
      </Flex>
    </div>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
      propertiesForSale: propertyForSale?.hits
    }
  }
}
