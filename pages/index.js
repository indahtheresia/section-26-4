import { MongoClient } from 'mongodb';

import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'First Meetup',
//     image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg',
//     address: 'Some address 5, 12345 Some City',
//     description: 'This is a first meetup!'
//   },
//   {
//     id: 'm2',
//     title: 'Second Meetup',
//     image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg',
//     address: 'Some address 10, 12345 Some City',
//     description: 'This is a second meetup!'
//   }
// ];

function HomePage(props) {
  return <>
    <Head>
      <title>React Meetups</title>
      <meta name="description" content="Browse a huge list of highly active React meetups!" />
    </Head>
    <MeetupList meetups= {props.meetups} />
  </>
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect('mongodb+srv://indahthere29:passrelatedSome@cluster0.bk2i8.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1
  };
}

export default HomePage;