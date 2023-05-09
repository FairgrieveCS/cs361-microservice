import { useNavigate } from 'react-router-dom';
import CounterButton from '../components/CounterButton';

function EarnCoins() {
    // Function to handle button click
    const handleButtonClick = async () => {
      // Send a request to increment the counter
      const response = await fetch('http://localhost:3000/counter/increment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: 'user123' }),
      });
  
      // Parse the response JSON
      const data = await response.json();
  
      // Check if there's an error in the response
      if (data.error) {
        // Log the error
        console.error('Error:', data.error);
      } else {
        // Log the successful increment response
        console.log('Increment response:', data);
      }
    };

  return (
    <div>
      <h1>Welcome to the Coin Earner</h1>
      <p>Here you'll see a list of ways to earn coins.</p>
      <table className="table-schema">
        <thead>
          <tr>
            <th className="row-schema-2">Activity</th>
            <th className="row-schema-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="row-schema">Built in Coin Earner</td>
            <td className="row-schema">
              Earn coins passively when you have an account!
            </td>
          </tr>
          <tr>
            <td className="row-schema">Coins for grades</td>
            <td className="row-schema">
              Earn coins for your grades. The better the grade, the more you
              earn!
            </td>
          </tr>
        </tbody>
      </table>
      <CounterButton onClick={handleButtonClick} />
    </div>
  );
}

export default EarnCoins;
