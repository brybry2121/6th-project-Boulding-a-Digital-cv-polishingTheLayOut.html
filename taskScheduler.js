// Task 1: Declare The Task Array and The Interval ID
// Declare an array to hold one-time tasks and variables for interval IDs.
const oneTimeTasks = [];
let monitoringTaskId = null;

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
	// Add an object containing the function and delay into the oneTimeTasks array.
	oneTimeTasks.push({ func, delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
	// Iterate over the oneTimeTasks array.
	for (const task of oneTimeTasks) {
		// Use setTimeout to schedule each task according to its delay.
		setTimeout(task.func, task.delay);
	}
}

// Task 4: Start Monitoring Function
function startMonitoring() {
	// Use setInterval to simulate continuous monitoring.
	monitoringTaskId = setInterval(() => {
		console.log("Monitoring the system...");
	}, 2000); // Adjust the interval as needed (e.g., every 2 seconds).
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
	// Use clearInterval to stop the continuous monitoring.
	clearInterval(monitoringTaskId);
	console.log("Monitoring stopped.");
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
	// Use setInterval to decrease the countdown every second.
	const countdownId = setInterval(() => {
		if (duration > 0) {
			console.log(`Time remaining: ${duration} seconds`);
			duration--;
		} else {
			clearInterval(countdownId);
			console.log("Liftoff!");
		}
	}, 1000); // Decrease the countdown every second.
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
	// Add pre-launch system check task with a delay of 1 second.
	addOneTimeTask(() => {
		console.log("Pre-launch system check.");
	}, 1000);

	// Add start monitoring task with a delay of 2 seconds.
	addOneTimeTask(() => {
		startMonitoring();
	}, 2000);

	// Add stop monitoring task with a delay of 10 seconds.
	addOneTimeTask(() => {
		stopMonitoring();
	}, 10000);

	// Add start countdown task with a delay of 11 seconds.
	addOneTimeTask(() => {
		startCountdown(5); // Adjust the countdown duration as needed (e.g., 5 seconds).
	}, 11000);

	// Run all one-time tasks.
	runOneTimeTasks();
}

// Start the mission.
scheduleMission();