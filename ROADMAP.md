# Roadmap Items

### UI/UX
* Build out the Homepage so it actually serves a purpose
* Refresh the Menu and Cart pages
  * My initial vision for the Menu items was to have a Card with a picture of the item. When this card is clicked, a dialog would appear that allows the user to select the size of the item and add it cart. When I decided to narrow down scope, keeping the card component and extending it to display all of a menu item's size options was the quickest way forward.
  * Since the contained cards would be a similar size, the current Grid layout being used would also be more purposeful. The layout originally put several menu items on the same row, but the uneven sizing of the cards looked off
  * The cart itself could use a lot of UX work. It currently adds a row for every item the user adds to their cart rather than allowing for an editable quantity.
* Add a persistent cart slideout drawer, which was one of the first things I cut once I got underway due to the timebox.
* Format all currency properly

### Testing
* Use better selectors
  * I was essentially out of time when I added tests, so I chose to lean heavily on getByText rather than other selectors that are less rigid

### Implementation
* Axios Woes
  * I ran into CORS issues attempting to get the list of menu items from AWS. After investigating I decided to hardcode the menu on call failure instead of dedicating more time to the issue.
  * The axios code around the API call is currently made directly in the component that leverages the data, that should be pulled out into its own API section of the codebase
* Types
  * Some of the type names became a bit confusing as I realized when new types were needed. I'd like to review that update the type names to ensure they're consistent and understandable.
  * As mentioned in the UI/UX section, cart items (OrderItem) should be updated to have a quantity.
* Clean up the use of `style` props on components and instead use either Material UI's style hooks or another library such as Styled Components.