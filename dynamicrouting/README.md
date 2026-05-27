# React Router Practice – Navbar & Dynamic Routing
# Live -> reactroutinggg.netlify.app
A  React project built to practice **React Router DOM** concepts including navigation, nested routes, dynamic routes, and modern routing configuration.

## Features

* Routing using **React Router DOM**
* Modern routing with `createBrowserRouter` and `RouterProvider`
* Shared layout using **Layout component + Outlet**
* Navigation with **NavLink**
* Programmatic navigation using **useNavigate**
* Nested and dynamic routes
* 404 fallback route

## Concepts Learned

### 1. Navigation with NavLink

* Used `NavLink` instead of `Link` for navigation menus.
* `NavLink` provides an **`isActive` state** that helps style the current active link.

Example:

```jsx
<NavLink
  to="/contacts"
  className={({ isActive }) => isActive ? "text-red-500" : ""}
>
  Contact
</NavLink>
```

### 2. Programmatic Navigation

* Used **`useNavigate`** to perform navigation through logic instead of UI clicks.
* Useful for actions like **redirect after login or form submission**.

Example:

```jsx
const navigate = useNavigate()

function handleSubmit() {
  navigate("/products")
}
```

### 3. Modern Routing with createBrowserRouter

* Implemented the **modern React Router Data API**.
* Routes are defined as objects instead of JSX.
* The router is created once and provided to the app using `RouterProvider`.

Example:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> }
    ]
  }
])
```

### 4. Layout Pattern

* Created a `Layout` component to manage shared UI.
* `Navbar` and `Footer` render on all pages.
* `Outlet` is used as a placeholder for child routes.

Example:

```jsx
<Navbar />
<Outlet />
<Footer />
```

### 5. Nested & Dynamic Routes

* Implemented nested routing for structured URLs.
* Used **dynamic parameters** like `:id`.
* Accessed params using `useParams`.

Example URL:

```
/products/:random/details/:all
```

## Tech Stack

* React
* React Router DOM
