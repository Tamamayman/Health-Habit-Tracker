// Handling form submission for adding habits
document.getElementById("habitForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form inputs
    const habit = document.getElementById("habit").value;
    const frequency = document.getElementById("frequency").value;
    
    // Create a new habit item in the list
    const habitList = document.getElementById("habitList");
    const habitItem = document.createElement("div");
    habitItem.classList.add("habit-item");
    habitItem.innerHTML = `<strong>${habit}</strong> - You do this habit ${frequency} times a week.`;
    
    habitList.appendChild(habitItem);
    
    // Clear input fields
    document.getElementById("habit").value = '';
    document.getElementById("frequency").value = '';
});
