# Wishlist Management App

Welcome to the Wishlist Management App! This React application allows users to input and manage their wishes in a convenient and user-friendly manner. The app provides features such as adding new wishes, displaying the wishlist, clearing all wishes, and deleting individual wishes.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Arihant-Singh-Rana/Wishlist-Management-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd wishlist-management-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app:

   ```bash
   npm start
   ```

Now, you can access the app in your browser at [http://localhost:3000](http://localhost:3000).

## Code Snippets

### App Component (App.js)

The main `App` component handles the state of the wishlist and manages functions for adding, clearing, and deleting wishes.

```jsx
// ... (imports)

export default function App() {
  const [pass, setPass] = useState([]);

  function add({ updata }) {
    setPass([...pass, updata]);
  }

  function clearAll(clear) {
    if (clear) {
      setPass([]);
    }
  }

  function DeleteItem(index) {
    let temp = [...pass];
    temp.splice(index, 1);
    setPass(temp);
  }

  return (
    <>
      <div id="parent">
        <h1 id="h1">Wish List Manager</h1>
        <UserInput addtothelist={add} clearAll={clearAll} />
        <ShowData sendData={pass} DeleteItem={DeleteItem} />
      </div>
    </>
  );
}
```

### UserInput Component (UserInput.js)

The `UserInput` component handles the input form for adding wishes and includes buttons for updating and clearing the wishlist.

```jsx
// ... (imports)

export default function UserInput({ addtothelist, clearAll }) {
  const [item, setItem] = useState({ updata: "" });

  function whenSubmmit(e) {
    e.preventDefault();
    addtothelist(item);
    setItem({ updata: "" });
  }

  function handleChange(e) {
    e.preventDefault();
    setItem({ updata: e.target.value });
  }

  function setClearAll(e) {
    clearAll(true);
    e.preventDefault();
  }

  return (
    <div className="parent">
      <form>
        <label htmlFor="inputwish" className="label">
          Enter Your Wish Item :{" "}
        </label>
        <input
          type="text"
          id="inputwish"
          value={item.updata}
          onChange={handleChange}
        />
        <br />
        <button onClick={whenSubmmit} id="add">
          Update
        </button>
        <button onClick={setClearAll} id="clear">
          Clear All
        </button>
      </form>
    </div>
  );
}
```

### ShowData Component (ShowData.js)

The `ShowData` component displays the wishlist items and includes a "Delete" button for each item.

```jsx
// ... (imports)

export default function ShowData({ sendData, DeleteItem }) {
  let items = sendData.map((item, index) => (
    <div key={index} className="parent">
      <li>{item}</li>
      <div className="delete">
        <button onClick={() => DeleteItem(index)}>Delete</button>
      </div>
    </div> 
  ));

  return (
    <div>
      <h1 style={{ fontFamily: "Luxurious Roman" }}>Wish List Items : </h1>
      <ul>{items}</ul>
    </div>
  );
}
```

Feel free to explore and enhance the functionality of this Wishlist Management App!# SignUpForm
