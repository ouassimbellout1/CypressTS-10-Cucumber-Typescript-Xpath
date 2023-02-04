Feature: Data Driven with XLSX

    Scenario: Invalid login with Excel file
        Given J'accede a l'url
        When Le fichier excel est pret
        Then Utiliser XLSX pour se connecter

    Scenario: Invalid login with Json file
        Given J'accede a l'url
        When Le fichier excel est pret
        Then Utiliser Json pour se connecter

    Scenario: Invalid login with data table
        Given J'accede a l'url
        Then Utiliser data table pour se connecter
             | email           | password |
             | user1@gmail.com | 123      |
             | user2@gmail.com | 456      |
             | user3@gmail.com | 789      |
             | user4@gmail.com | 753      |