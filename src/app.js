document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: 'Robusta Brazil', img: '1.jpeg', price: 20000 },
      { id: 2, name: 'Arabica Blend', img: '2.jpeg', price: 25000 },
      { id: 3, name: 'Primo Passo', img: '3.jpeg', price: 30000 },
      { id: 4, name: 'Aceh Gayo', img: '4.jpeg', price: 35000 },
      { id: 5, name: 'Sumatra Mandheling', img: '5.jpeg', price: 40000 }
    ]
  }))

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,


    addItem(item) {
      // cek apakah item sudah ada atau belum
      const itemExist = this.items.find(x => x.id === item.id);

      if (!itemExist) {
        this.items.push({ ...item, quantity: 1, total: item.price })
      } else {
        this.items = this.items.map(x => {
          if (x.id === item.id) {
            return { ...x, quantity: x.quantity + 1, total: (x.quantity + 1) * x.price }
          } else {
            return x
          }
        })
      }

      this.total = this.items.reduce((a, b) => a + b.total, 0);
      this.quantity = this.items.reduce((a, b) => a + b.quantity, 0);
    },

    removeItem(id) {
      const itemTarget = this.items.find(item => item.id === id);

      if (itemTarget.quantity > 1) {
        console.log('atas')
        this.items = this.items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price }
          } else {
            return item
          }
        })
      } else {
        console.log('bawah')
        this.items = this.items.filter(item => item.id !== id);
      }

      this.total = this.items.reduce((a, b) => a + b.total, 0);
      this.quantity = this.items.reduce((a, b) => a + b.quantity, 0);
    }
  })
});

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number)
}