import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image= "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg"
      title= "First Meetup"
      address= "Some Street 5, Some City"
      description= "This is a first meetup"
    />
  );
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  
  return {
    props: {
      meetupData: {
        image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg",
        id: 'm1',
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    }
  }
}

export default MeetupDetails;