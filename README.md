# Full-Stack Eshop with Angular and Spring Boot

In this project Angular will work as the client in the front-end and Spring Boot as the server in the back-end. They will communicate each other using REST API. Furthermore, there will be Full CRUD Support for the MySQL Database.


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#features-of-the-application">Features of the application</a>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    
  </ol>
</details>

## Features of the application

* Show a list of products
* Add products to shopping cart(CRUD)
* Shopping cart check out
* User login/logout

### Built With

- [Spring-boot](https://spring.io/projects/spring-boot)
- [Angular](https://angular.io/)
- [MySQL](https://www.mysql.com/)
- [IntelliJIDEA](https://www.jetbrains.com/idea/)


<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

- npm 8.1.0
- Angular CLI: 13.0.3
- Node: 16.13.0
- Spring boot
- Java 17.0.1
- MySQL Workbench
- MySQL Server

## Installation

1. First of all clone the repo:

   ```sh
   git clone https://github.com/leFos-95/FullStackDev.git

   ```
2. In the folder that the repo is cloned run:

    ```sh
    npm install
    npm install -g @angular/cli
    
    ```

3. Run both SQL scripts from 01-starter-files/db-scripts
    
   * 01-create-user
   * refresh-database-with-100-products


4. To run the server:

    * Import project at IntelliJ
    * Enable lombok
    * Run the application


5. To run the client:

    Go to 02-front-end/angular-ecommerce and run:
    ```sh
    ng serve

    ```




## License

Distributed under the MIT License. See [LICENSE](https://spdx.org/licenses/MIT.html) for more information.

<!-- CONTACT -->

## Contact

Lefteris Soulis - lefteris95.soulis@gmail.com

Project Link: [https://github.com/leFos-95/FullStackDev](https://github.com/leFos-95/FullStackDev)
