--- Counter Microservice ---

3 Files: counter_service.mjs, CounterButton.js (components folder), EarnCoins.js (added a function, pages folder)

This microservice implements functionality that generates coins/currency for users and
allows them to collect the coins by clicking a button. Users can check their balance and 
the counter value.


--- Requesting Data ---

Requesting data from the microservice is implemented in the 'CounterButton.js' component.
Below are the methods used to send requests to endpoints:

1.  Increment counter: incrementCounter()
2.  Get counter value: getCounterValue()
3.  Reset counter: resetCounter()

Example call (from handleClick in CounterButton.js):
	
	const incrementResponse = await incrementCounter();
	const currentValueResponse = await getCounterValue();
	const resetResponse = await resetCounter();
	

--- Recieving Data ---

Recieving data from the microservice is also implemented in the 'CounterButton.js' component.
After making the requests to the endpoints, the response data is logged:

	console.log('Increment response:', incrementResponse);
	console.log('Current counter value:', currentValueResponse);
	console.log('Reset response:', resetResponse);
	

--- UML Sequence Diagram ---

User (React App)         CounterButton       Counter Microservice
      |                      |                           |
      | Clicks button        |                           |
      |--------------------->|                           |
      |                      | Sends increment request   |
      |                      |-------------------------> |
      |                      |                           | Increments counter
      |                      |                           | Updates user balance
      |                      | Receives increment data   |
      |                      |<------------------------- |
      | Logs increment data  |                           |
      |<---------------------|                           |
      |                      |                           |

