// Incorrect code:
// export function UpcomingPage() { ... }

// Correct code:
export default function UpcomingPage() { 
  return <h1 style={{padding: '5rem', textAlign: 'center'}}>Upcoming Games (Coming Soon)</h1>; 
}