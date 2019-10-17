const API_URL = 'https://api.spotify.com/v1';

const token = 'BQAx6l0UVvINzY-zLUrjwO87oN6Abnp3VhJiPKFMeNTJoZ8W207wb6f6YuwOWnfJErSQ0DtK35J7qXvly6WId726Ebwk4MgjJ1zrmTWTGOdgH23ZeO4MOLGZx3vEI7OewsfdKnJgIkQgQPE28emjqTzm007HRcHTCLq9F8a688obfp3tFtEaXD0LCSBTaXEGeZOjuWzjfa_zlJT2C7KIXyF5IMmB5JDNPa1hsju3gNMzH5pQI8pfFeTu0Qg6dsVgQTPhxm-qb-g';

const header = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  mode: 'cors',
};

export { API_URL, header };
