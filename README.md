# Counter-Strike leaderboards

In fulfilment of the solo project assignment at QA consulting.

## Index
[Brief](#brief)
   * [Solution](#solution)
   

[Testing](#testing)
   * [Report](#report)

     
[Deployment](#depl)
   * [Technologies Used](#tech)
     
[Front End Design](#FE)

[Improvements for the Future](#improve)

[Authors](#auth)

[Acknowledgements](#ack)

<a name="brief"></a>
## The Brief

To create an OOP-based application with utilisation of supporting tools, methodologies and technologies that encapsulate all core modules covered during training. The application must manipulate two tables with full CRUD functionality.

<a name="solution"></a>
### Solution

I decided to create a leaderboards application for Counter-Strike: Global Offensive that would allow the user to view the top teams and players and add, remove and update them.

Currently teams and players are not linked.

<a name="testing"></a>
## Testing

Test coverage for the backend is at 0% due to me being unable to run my backend on IntelliJ. However, I have JUnit tests there that should cover all classes in the backend. Selenium tests have been created for the frontend and cover all elements.
Codacy was used to review the code quality.
* Codacy Tests
	* [Front end Tests](https://app.codacy.com/manual/Dylan-Grimes/SoloProject/dashboard)
	* [Back end Tests](https://app.codacy.com/manual/Dylan-Grimes/projectSpring/dashboard)
    * [GitHub for Selenimu tests](https://github.com/Dylan-Grimes/selenimumTests.git)

<a name="depl"></a>
## Deployment

As a project tracking tool Trello was used to ensure tasks were completed inline with the specification. GitHub was used as a version control system with the front end, backend and selenium tests being in seperate repositories, this allowed me to track and manage updates to the project. The backend was created using java and spring boot and SQL for the database.

Building the frontend was done using Jenkins with a GitHub webhook, both the frontend and backend run using GCP.


<a name="tech"></a>
### Technologies Used

*   GCP - Live Environment
*   MySQL Database- Database
*   Java - API 
*   JavaScript - Front End 
*   HTML, CSS - Front End Design
*   Apache2 - Deployment
*   Jenkins - CI Server
*   Maven - Dependency Management
*   [Git](https://github.com/Dylan-Grimes/soloProject) - VCS
*   [Trello](https://trello.com/b/7bxN8Omr/individual-project) - Project Tracking
<a name="FE"></a>
## Front End Design
### Wireframes
![Wireframes](/Documentation/pageWireframe.PNG)
![Wireframes](/Documentation/addWireframe.PNG)


## Final Appearance
### Team Leaderboard
![Team Leaderboard](/Documentation/teamPage.PNG)
### Player Leaderboard
![Player Leaderboard](/Documentation/playersPage.PNG)
### Add Team
![Add Team](/Documentation/addTeamPage.PNG)
### Add Player
![Add Player](/Documentation/addPlayerPage.PNG)
### Update Team
![Update Team](/Documentation/updateTeamPage.PNG)
### Update Player
![Update Player](/Documentation/addTeamPage.PNG)


<a name="improve"></a>
## Improvements for the Future

Currently when updating a team all values have to be completed with either current or new ones, i would like to have the current values in the update form when its opened. I would also like IDs to not visable by the user and allow users to delete using names and not ID.

In later updates, I would also like have my tables to be functioning with their one to many relationship of players into teams. With these being displayed on the application when a team is selected.

<a name="auth"></a>
## Authors

Dylan Grimes

<a name="ack"></a>
## Acknowledgements

* QA consulting and our fantastic instructors
* The rest of our great cohort on the programme 