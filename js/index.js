let counter = 0;

        function incrementClick() {
            counter++;
            document.getElementById("counter-label").innerText = counter;
        }

        function resetCounter() {
            counter = 0;
            document.getElementById("counter-label").innerText = counter;
        }