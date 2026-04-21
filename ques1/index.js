let productsData = [];

    async function fetchProducts() {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        productsData = data.products;
        renderTable(productsData);
    }

    function renderTable(products) {
      const tbody = document.getElementById('tableBody');
      tbody.innerHTML = '';

      products.forEach(product => {
        const row = `
          <tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>${product.rating}</td>
            <td>${product.stock}</td>
            <td>${product.brand || 'N/A'}</td>
            <td>${product.stock > 0 ? 'In Stock' : 'Out of Stock'}</td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
    }

    function sortPriceAsc() {
      const sorting = [...productsData].sort((a, b) => a.price - b.price);
      renderTable(sorting);
    }

    function sortPriceDesc() {
      const sorting = [...productsData].sort((a, b) => b.price - a.price);
      renderTable(sorting);
    }

    fetchProducts();

