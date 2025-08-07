function calculateAverage() {
      var price1 = parseFloat(document.getElementById("price1").value) || 0;
      var qty1 = parseFloat(document.getElementById("qty1").value) || 0;
      var price2 = parseFloat(document.getElementById("price2").value) || 0;
      var qty2 = parseFloat(document.getElementById("qty2").value) || 0;

      var totalCost = (price1 * qty1) + (price2 * qty2);
      var totalQty = qty1 + qty2;

      if (totalQty === 0) {
        document.getElementById("result").innerText = "Please enter valid quantities.";
        return;
      }

      var averagePrice = totalCost / totalQty;

      document.getElementById("result").innerHTML = `
        <strong>Average Price:</strong> ₹${averagePrice.toFixed(2)}<br>
        <strong>Total Units:</strong> ${totalQty}<br>
        <strong>Total Investment:</strong> ₹${totalCost.toFixed(2)}

      `;
    }document.getElementById("themeSwitcher").addEventListener("change", function () {
            document.body.classList.toggle("dark-mode", this.checked);
        });
