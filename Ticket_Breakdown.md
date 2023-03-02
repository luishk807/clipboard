# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. create a interface for fetch all users to select agents
    - use new design necesary so it loads the info properly in the UI and buttons
    - create api to fetch all users from db
    - time: 3 days
2. create form to post entries including the new custom id
    - create new form to load user info and new field to enter new custom 
    - create apis to update / post new custom id
    - time: 3 days
3. update getShiftsByFacility / generateReport function to send new custom id if available to use new custom id
    - update both function to accept new custom id
    - time: 1 day
4. update backend function to use new custom id to fetch information
    - update necesary backend script to receive new custom id
    - time: 1 day
5. update database table to accept new custom id table
    - create new column to accept new custom id
    - may need other changes in db
    - time: 1 / 2 days depending on other tables changes
