# Design

## This SDK follows the principles of Clean Architecture, separating the business logic from the presentation and data layers

* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)
* Composition Over Inheritance

The SDK uses [axios](https://axios-http.com/) to make HTTP requests to the API and [Jest](https://jestjs.io/) for testing.

## Layers

### Domain Layer

The Domain layer includes the core entities and use cases of the application, and it does not depend on any other layer. In this SDK, the Domain layer includes the core entities of the Lord of the Rings movies, such as Movie and Quote.

### Data Layer

The Data layer provides an implementation of the interfaces defined in the Domain layer. It is responsible for communicating with external systems, such as APIs and databases, to retrieve and persist data. In this SDK, the Data layer includes a MovieRepository interface and a remote implementation that retrieves movie data from the Lord of the Rings API.

### Infrastructure Layer

The Infrastructure layer provides concrete implementations of third party libraries for the protocols defined in the Data layer. It provides any necessary external dependencies, such as libraries and frameworks. In this SDK, the Infrastructure layer includes an implementation of Axios.

### Main Layer

The Main Layer, also known as the Application Layer, is the entry point of the application and coordinates the interactions between the other layers of the application, allowing the execution of use cases. It is responsible for orchestrating calls to the objects of the other layers of the application so that the use case can be executed. In the Clean Architecture, the Main Layer depends on the Presentation and Domain layers, but does not depend on the Data or Infrastructure layers. The idea is that the Main Layer integrates the Presentation and Domain layers, using the abstractions defined in the latter layer.

In the case of this SDK, the Main Layer is responsible for exporting the functions that SDK users will use to interact with the API. It uses the abstractions defined in the Domain layer to execute the necessary use cases and obtain the data requested by SDK users.
