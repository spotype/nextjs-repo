export default function page() {
  return (
    <div>
      <pre
        style={{
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
        {data}
      </pre>
    </div>
  );
}

const data = `{"id":25,"title":"Gulab Powder 50 Gram","description":"Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds","price":70,"discountPercentage":13.58,"rating":4.87,"stock":47,"brand":"Dry Rose","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/25/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/25/1.png","https://i.dummyjson.com/data/products/25/2.jpg","https://i.dummyjson.com/data/products/25/3.png","https://i.dummyjson.com/data/products/25/4.jpg","https://i.dummyjson.com/data/products/25/thumbnail.jpg"]}`;
