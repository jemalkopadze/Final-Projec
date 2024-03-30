import {
  AboutUs,
  Authors,
  Category,
  Events,
  Subscribe,
  Home,
  Series,
  ContactUs,
  Books,
  Products,
  EventsPage,
  EventsSinglePage,
  SeriesCategories,
  Profile,
  Cart
} from 'pages';

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:lang",
    element: <Home />
  },
  {
    path: "/:lang/category",
    element: <Category />,
  },
  {
    path: "/:lang/events/",
    element: <Events />,
  },
  {
    path: '/:lang/series',
    element: <Series />
  },
  {
    path: '/:lang/series/seriesCategory/:categoryId',
    element: <SeriesCategories />
  },
  // {
  //   path: '/:lang/series',
  //   element: <SeriesHome />
  // },

  // {
  //   path: '/:lang/series/:categoryId/:seriesId/',
  //   element: <SeriesDetails />
  // },
  {
    path: "/:lang/subscribe",
    element: <Subscribe />,
  },
  {
    path: "/:lang/authors",
    element: <Authors />,
  },
  {
    path: '/:lang/contact',
    element: <ContactUs />
  },
  {
    path: "/:lang/About",
    element: <AboutUs />,
  },
  {
    path: "/:lang/books/:id",
    element: <Books />
  },
  {
    path: "/:lang/products/:productID",
    element: <Products />
  },
  {
    path: '/:lang/eventsPage/',
    element: <EventsPage />
  },
  {
    path: '/:lang/eventsPage/:eventsId',
    element: <EventsSinglePage />
  },
  {
    path: '/:language/profile',
    element: <Profile />
  },
  {
    path: '/:language/cart',
    element: <Cart />
  },
  {
    path: "*",
    element: <Home />
  }

]