// import React, { useState, useEffect } from 'react';
// import { Stack } from 'expo-router';
// import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Image, ActivityIndicator } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const API_ENDPOINT = 'http://192.168.0.200:3000/api/organiser/dashboard/events/allevents';

// // Define types based on your schema
// interface Event {
//   id: number;
//   imagePath?: string;
//   title: string;
//   description: string;
//   dateStart: string;
//   dateEnd: string;
//   location: string;
//   venue: string;
//   category: string;
//   timeStart: string;
//   timeEnd: string;
//   totalSeats: number;
//   vipSeats: number;
//   vvipSeats: number;
//   specialGuestType: string;
//   specialGuestName: string;
//   isAvailable: boolean;
//   regularPrice: number;
//   vipPrice: number;
//   vvipPrice?: number;
//   isFree: boolean;
//   eventType: string;
//   status: string;
// }

// export default function Events() {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const { width } = useWindowDimensions();
//   const isWeb = width > 768;

//   useEffect(() => {
//     async function loadEvents() {
//       try {
//         setLoading(true);
//         const response = await fetch(API_ENDPOINT);
        
//         console.log(response);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data: Event[] = await response.json();
//         setEvents(data);
//         setError(null);
//       } catch (e) {
//         setError('Failed to load events. Please try again later.');
//         console.error('Error fetching events:', e);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadEvents();
//   }, []);

//   if (loading) {
//     return (
//       <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center">
//         <ActivityIndicator size="large" color="#8b5cf6" />
//         <Text className="mt-4 text-gray-600">Loading events...</Text>
//       </SafeAreaView>
//     );
//   }

//   if (error) {
//     return (
//       <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center">
//         <Text className="text-red-500 text-center px-4">{error}</Text>
//       </SafeAreaView>
//     );
//   }

//   const formatDate = (dateString: string) => {
//     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <SafeAreaView className="flex-1 bg-gray-100">
//       <Stack.Screen options={{ title: 'Upcoming Events' }} />
//       <ScrollView className="flex-1 p-4">
//         <View className="max-w-6xl mx-auto">
//           <Text className="text-3xl font-bold mb-6 text-center text-purple-800">
//             Exciting Events
//           </Text>
//           <Text className="text-lg mb-8 text-center text-gray-600">
//             Discover and join amazing events in your area!
//           </Text>
//           <View className={`flex flex-row flex-wrap ${isWeb ? '-mx-2' : ''}`}>
//             {events.map((event) => (
//               <View
//                 key={event.id}
//                 className={`${isWeb ? 'w-1/3 px-2 mb-4' : 'w-full mb-4'}`}
//               >
//                 <View className="bg-white rounded-lg shadow-md overflow-hidden h-full">
//                   <Image
//                     source={{ uri: event.imagePath || '/api/placeholder/400/300' }}
//                     className="w-full h-48 object-cover"
//                   />
//                   <View className="p-4">
//                     <Text className="text-xl font-semibold mb-2 text-purple-700">{event.title}</Text>
//                     <Text className="text-gray-600 mb-1">{event.description}</Text>
//                     <Text className="text-gray-600 mb-1">Start: {formatDate(event.dateStart)} at {event.timeStart}</Text>
//                     <Text className="text-gray-600 mb-1">End: {formatDate(event.dateEnd)} at {event.timeEnd}</Text>
//                     <Text className="text-gray-600 mb-1">Location: {event.location}</Text>
//                     <Text className="text-gray-600 mb-1">Venue: {event.venue}</Text>
//                     <Text className="text-gray-600 mb-1">Category: {event.category}</Text>
//                     <Text className="text-gray-600 mb-1">Type: {event.eventType}</Text>
//                     <Text className="text-gray-600 mb-1">Status: {event.status}</Text>
//                     <Text className="text-gray-600 mb-1">
//                       Seats: Regular ({event.totalSeats}), VIP ({event.vipSeats}), VVIP ({event.vvipSeats})
//                     </Text>
//                     <Text className="text-gray-600 mb-1">
//                       Prices: Regular (${event.regularPrice}), VIP (${event.vipPrice})
//                       {event.vvipPrice !== undefined ? `, VVIP ($${event.vvipPrice})` : ''}
//                     </Text>
//                     {event.specialGuestName && (
//                       <Text className="text-gray-600 mb-1">
//                         Special Guest: {event.specialGuestName} ({event.specialGuestType})
//                       </Text>
//                     )}
//                     <Text className="text-gray-600 mb-3">
//                       {event.isFree ? 'Free Event' : event.isAvailable ? 'Tickets Available' : 'Sold Out'}
//                     </Text>
//                     <View className="mt-auto">
//                       <TouchableOpacity 
//                         className={`py-2 px-4 rounded-full ${event.isAvailable ? 'bg-purple-600' : 'bg-gray-400'}`}
//                         disabled={!event.isAvailable}
//                       >
//                         <Text className="text-white text-center font-semibold">
//                           {event.isAvailable ? 'Book Now' : 'Sold Out'}
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </View>
//               </View>
//             ))}
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_ENDPOINT = 'http://192.168.0.200:3000/api/organiser/dashboard/events/allevents';

// Define types based on your schema
interface Event {
  id: number;
  imagePath?: string;
  title: string;
  description: string;
  dateStart: string;
  dateEnd: string;
  location: string;
  venue: string;
  category: string;
  timeStart: string;
  timeEnd: string;
  totalSeats: number;
  vipSeats: number;
  vvipSeats: number;
  specialGuestType: string;
  specialGuestName: string;
  isAvailable: boolean;
  regularPrice: number;
  vipPrice: number;
  vvipPrice?: number;
  isFree: boolean;
  eventType: string;
  status: string;
}

// Base64 encoded 1x1 pixel transparent PNG as a fallback image
const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==';

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { width } = useWindowDimensions();
  const isWeb = width > 768;

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINT);
        
        console.log('API Response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Event[] = await response.json();
        console.log('Fetched Events:', data);
        setEvents(data);
        setError(null);
      } catch (e) {
        setError('Failed to load events. Please try again later.');
        console.error('Error fetching events:', e);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center">
        <ActivityIndicator size="large" color="#8b5cf6" />
        <Text className="mt-4 text-gray-600">Loading events...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center">
        <Text className="text-red-500 text-center px-4">{error}</Text>
      </SafeAreaView>
    );
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Stack.Screen options={{ title: 'Upcoming Events' }} />
      <ScrollView className="flex-1 p-4">
        <View className="max-w-6xl mx-auto">
          <Text className="text-3xl font-bold mb-6 text-center text-purple-800">
            Exciting Events
          </Text>
          <Text className="text-lg mb-8 text-center text-gray-600">
            Discover and join amazing events in your area!
          </Text>
          <View className={`flex flex-row flex-wrap ${isWeb ? '-mx-2' : ''}`}>
            {events.map((event) => (
              <View
                key={event.id}
                className={`${isWeb ? 'w-1/3 px-2 mb-4' : 'w-full mb-4'}`}
              >
                <View className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                  <Image
                    source={{ uri: event.imagePath || placeholderImage }}
                    className="w-full h-48 object-cover"
                    onError={(error) => console.error('Image loading error:', error.nativeEvent.error)}
                  />
                  <View className="p-4">
                    <Text className="text-xl font-semibold mb-2 text-purple-700">{event.title}</Text>
                    <Text className="text-gray-600 mb-1">{event.description}</Text>
                    <Text className="text-gray-600 mb-1">Start: {formatDate(event.dateStart)} at {event.timeStart}</Text>
                    <Text className="text-gray-600 mb-1">End: {formatDate(event.dateEnd)} at {event.timeEnd}</Text>
                    <Text className="text-gray-600 mb-1">Location: {event.location}</Text>
                    <Text className="text-gray-600 mb-1">Venue: {event.venue}</Text>
                    <Text className="text-gray-600 mb-1">Category: {event.category}</Text>
                    <Text className="text-gray-600 mb-1">Type: {event.eventType}</Text>
                    <Text className="text-gray-600 mb-1">Status: {event.status}</Text>
                    <Text className="text-gray-600 mb-1">
                      Seats: Regular ({event.totalSeats}), VIP ({event.vipSeats}), VVIP ({event.vvipSeats})
                    </Text>
                    <Text className="text-gray-600 mb-1">
                      Prices: Regular (${event.regularPrice}), VIP (${event.vipPrice})
                      {event.vvipPrice !== undefined ? `, VVIP ($${event.vvipPrice})` : ''}
                    </Text>
                    {event.specialGuestName && (
                      <Text className="text-gray-600 mb-1">
                        Special Guest: {event.specialGuestName} ({event.specialGuestType})
                      </Text>
                    )}
                    <Text className="text-gray-600 mb-3">
                      {event.isFree ? 'Free Event' : event.isAvailable ? 'Tickets Available' : 'Sold Out'}
                    </Text>
                    <View className="mt-auto">
                      <TouchableOpacity 
                        className={`py-2 px-4 rounded-full ${event.isAvailable ? 'bg-purple-600' : 'bg-gray-400'}`}
                        disabled={!event.isAvailable}
                      >
                        <Text className="text-white text-center font-semibold">
                          {event.isAvailable ? 'Book Now' : 'Sold Out'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}