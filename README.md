# Interview tasks

## 1. Build and run

Get this solution up and running in a browser including client side customizations

Login with:
Email: admin@example.com
Password: 1234567890

## 2. Full stack feature: A UI section showing the top-3 most popular hotels

A. Add a new property "Rating" to the hotel content type. We will use rating between 1 and 5.

B. Create serveside code that checks all the hotels we have in Umbraco every 30 seconds. The job simulates that we are fetching ratings from an external provider and saving them on our hotels. You should mock this by adding -1, 0 or 1 to the current rating. Chosen by random for each hotel. But ensure that we stay between 1 and 5.

C. Implement a UI section below the banner on the Welcome page. The section should fetch the top 3 hotels from the server, and show them. You can write a custom api or use the built in management api.

## 3. Custom workspace view (extra task if time permits)

Explain what the `<umbrago-create-article-workspace-view>` does. When is it shown. Why. What does it contain.

## 4. Umbraco comcepts (extra task if time permits)

Explain the Umbraco concepts "property editor", "data type", "property editor schema"