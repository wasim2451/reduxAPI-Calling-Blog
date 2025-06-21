export const addPost = async (postData) => {
  // Simulate a successful response from the API
  const mockResponse = {
    id: Math.floor(Math.random() * 1000), // Generate a random ID
    ...postData,
  };
  return mockResponse;
};