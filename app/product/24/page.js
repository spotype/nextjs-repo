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

const data = `{"id":24,"title":"cereals muesli fruit nuts","description":"original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji","price":46,"discountPercentage":16.8,"rating":4.94,"stock":113,"brand":"fauji","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/24/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/24/1.jpg","https://i.dummyjson.com/data/products/24/2.jpg","https://i.dummyjson.com/data/products/24/3.jpg","https://i.dummyjson.com/data/products/24/4.jpg","https://i.dummyjson.com/data/products/24/thumbnail.jpg"]}`;
