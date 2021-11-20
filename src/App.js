import { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import Feedback from './components/Feedback/Feedback';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

export default function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
  
	const onLeaveFeedback = e => {
	  const name = e.target.name;
	  switch (name) {
		case 'good':
		  setGood(prevGood => prevGood + 1);
		  break;
		case 'neutral':
		  setNeutral(prevNeutral => prevNeutral + 1);
		  break;
		case 'bad':
		  setBad(prevBad => prevBad + 1);
		  break;
		default:
		  return;
	  }
	};
  
	const countTotalFeedback = () => good + neutral + bad;
  
	const countPositiveFeedbackPercentage = () =>
	  Math.round((100 * good) / countTotalFeedback());
  
	return (
	  <div>
		<Section title="Please leave feedback">
		  <Feedback
			options={['good', 'neutral', 'bad']}
			onLeaveFeedback={onLeaveFeedback}
		  />
		</Section>
		
		{countTotalFeedback() === 0 ? (
				<Notification message="No feedback given" />
		) : (
			<Section title="Statistics">
				<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					total={countTotalFeedback()}
					positivePercentage={countPositiveFeedbackPercentage()}
				/>
			</Section>
		)}

	  </div>
	);
}