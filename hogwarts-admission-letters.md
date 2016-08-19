The [Hogwarts School of Witchcraft and Wizardry][wikipedia-hogwarts] is
switching over from owl delivery to e-mails when sending their admission
letters. You have been hired to create a React application to facilitate writing
these letters.

![Hogwarts Admission Letters 1][hogwarts-admission-letters-1]

## Setup
From your challenges directory, run the following:

```sh
$ et get hogwarts-admission-letters
$ cd hogwarts-admission-letters
$ npm install
$ webpack-dev-server
```
If you go to [localhost:8080][localhost-8080], there will be nothing displayed
on the page and there should be no errors in your console.

## Deliverables
1. When the initial application loads, your application should default to
   displaying an acceptance letter. The content of an acceptance letter is as
   follows:

   ```
   HOGWARTS SCHOOL OF WITCHRAFT AND WIZARDRY

   Headmaster: Albus Dumbledore
   (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump,
   International Confed. of Wizards)

   Dear Adressee,

   We are pleased to inform you that you have a place at Hogwarts School of
   Witchcraft and Wizardry. Please find enclosed a list of all necessary books and
   equipment.

   Term begins on 1 September. We await your owl by no later than 31 July.

   Your sincerely,

   Minerva McGonagall
   Deputy Headmistress
   ```

   and the application should look like:

   ![Hogwarts Admission Letters 1][hogwarts-admission-letters-1]

2. Clicking on the Rejected button should show the rejection letter with the
   following template:

   ```
   HOGWARTS SCHOOL OF WITCHRAFT AND WIZARDRY

   Headmaster: Albus Dumbledore
   (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump,
   International Confed. of Wizards)

   Dear Adressee,

   We regret to inform you that we are unable to offer you a place at Hogwarts
   School of Witchcraft and Wizardry. After reviewing your application and
   Github profile, we recognize that you are indeed a "coding wizard".
   Unfortunately, we have concluded that you do not have actual magical
   abilities, which you must have to be admitted into Hogwarts.

   Your sincerely,

   Minerva McGonagall
   Deputy Headmistress
   ```

   and the application should look like:

   ![Hogwarts Admission Letters 2][hogwarts-admission-letters-2]

3. Clicking on the Accepted button should display the acceptance letter.
4. If the Adressee text input field is blank, then the letter should contain
   "Dear Adresse". However, if the text input field is filled out then the
   letter should be addressed to the text input value. For example, if the text
   input value is "Mr. Alex Jarvis", then the letter should contain "Dear Mr.
   Alex Jarvis" like so:

   ![Hogwarts Admission Letters 3][hogwarts-admission-letters-3]

5. Draco Malfoy says that you're not good enough to style your application to
   match the design because you're a muggle (a.k.a. person with no magical
   abilities). Prove him wrong!

## Pro Tips
* You can use the Hogwarts emblem found at [this url][wikipedia-hogwarts-emblem].
* Start by rendering a static version of the site. Then covert the minimum
  number of stateless components to stateful components to make your page
  functional.

[hogwarts-admission-letters-1]: https://s3.amazonaws.com/horizon-production/images/hogwarts-admission-letters-1.png
[hogwarts-admission-letters-2]: https://s3.amazonaws.com/horizon-production/images/hogwarts-admission-letters-2.png
[hogwarts-admission-letters-3]: https://s3.amazonaws.com/horizon-production/images/hogwarts-admission-letters-3.png
[localhost-8080]: http://localhost:8080
[wikipedia-hogwarts]: https://en.wikipedia.org/wiki/Hogwarts
[wikipedia-hogwarts-emblem]: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png
