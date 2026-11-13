# InsKino 🎬

**Discover stories. Experience cinema.**

InsKino is a movie and TV-show discovery platform being developed as a university project by **Muhamet Maliqi** and **Premtim Ahmeti**. The goal is to give users a place to explore films and series, discover titles by genre, rate movies, write reviews, and maintain a personal watchlist and viewing history.

The project takes inspiration from the movie-discovery and film-journaling experience of [Letterboxd](https://letterboxd.com/), while being developed independently with its own identity and implementation. InsKino is not affiliated with or endorsed by Letterboxd.

---

## Current project status

> **Status: Initial frontend prototype in development**  
> **Last updated: 14 November 2026**

The current focus is the visual foundation and main page structure. The shared design direction uses a dark cinematic interface with gold accents (`#E5B94C`), responsive layouts, and reusable navigation and footer components.

### Prepared so far

- **Brand and navigation:** InsKino wordmark concept, dark navbar, navigation links, responsive menu, and animated active-link underline.
- **Shared footer:** Brand description, navigation links, account links, information links, and copyright area.
- **Homepage template:** Development announcement, hero section, sample movie sections, discovery banner, and popular TV-show section.
- **Featured slider:** Three-slide featured-movie carousel with previous/next controls, pagination dots, and a slide counter.
- **Homepage aside:** Genre shortcuts, planned-feature highlights, and a discovery call-to-action.
- **Login page UI:** Email and password fields, remember-me option, password visibility control, and links to registration and password recovery.
- **Registration page UI:** Username, email, password, password confirmation, and terms acceptance fields, with frontend password-match validation.
- **Responsive styling:** Initial desktop, tablet, and mobile layout rules for the main components.

### Current limitations

The project is still a prototype. The frontend templates and interactions are not the same as a fully working movie platform.

- Movie titles, descriptions, ratings, statistics, and poster paths currently include demonstration content or placeholders.
- The search interface is present, but real search functionality has not yet been connected.
- Genre links are navigation placeholders; database-driven genre filtering is still to be implemented.
- Login and registration forms have frontend layouts, but PHP authentication and account creation are not yet connected.
- Watchlists, user reviews, ratings, and personal movie diaries are planned features, not completed backend functionality.
- PHP–MySQL connectivity, database operations, and session handling remain upcoming work.

---

## Technology stack

| Technology | Planned / current role |
|---|---|
| HTML5 | Page structure and forms |
| CSS3 | Visual design, layout, animations, and responsive styling |
| JavaScript | Navigation interactions, slider controls, and client-side form checks |
| PHP | Planned server-side logic and authentication |
| MySQL | Planned persistent storage for users and movie-related data |

---

## Main pages and components

| Page / component | Current state |
|---|---|
| Homepage (`index.html`) | Frontend template prepared |
| Login (`login.html`) | Frontend template prepared; backend pending |
| Registration (`register.html`) | Frontend template prepared; backend pending |
| Discover (`discover.html`) | Planned page |
| Movies (`movies.html`) | Planned page; sample movie cards are used on the homepage |
| TV Shows (`tv-shows.html`) | Planned page; sample show cards are used on the homepage |
| About (`about.html`) | Planned page |
| Shared navbar and footer | Design and markup prepared for reuse |

---

## Planned functionality

1. **User accounts** - registration, login, logout, password hashing, and session management.
2. **Movie catalogue** - browse movies and view details such as title, release year, synopsis, runtime, director, poster, and genres.
3. **Search and discovery** - search for movies and filter titles by genre or other available details.
4. **Ratings and reviews** - allow signed-in users to rate movies and publish written reviews.
5. **Personal watchlist** - let users save titles they want to watch.
6. **Viewing diary and profile** - show a user's watched films, reviews, ratings, and profile information.
7. **Responsive experience** - refine the pages for desktop, tablet, and mobile devices.

---

## Planned database areas

The database design is expected to cover the following main entities. The final schema, columns, keys, and relationships will be documented once the MySQL implementation is finalized.

- **Users** - account details, username, email, password hash, role, and profile information.
- **Movies** - movie metadata and poster references.
- **Genres** - available movie genres and their relationships to movies.
- **Reviews / Ratings** - user-submitted opinions and ratings for movies.
- **Watchlist** - the movies saved by each user.
- **Viewing history** - titles a user has watched, if included in the final scope.

---

## Getting started

### Preview the current frontend

1. Clone or download the project repository.
2. Open the project folder in Visual Studio Code or another editor.
3. Open `index.html` in a browser, or run it with the **Live Server** extension.
4. Make sure the poster images referenced by the HTML exist in the corresponding `assets/posters/` folder.

The current frontend prototype can be previewed without a database. PHP and MySQL setup will be required when the backend is added.

### Suggested project structure

The actual folder structure may evolve as development continues. A possible structure is:

```text
InsKino/
├── index.html
├── login.html
├── register.html
├── discover.html
├── movies.html
├── tv-shows.html
├── about.html
├── style.css
├── script.js
├── assets/
│   ├── logo/
│   ├── posters/
│   └── icons/
├── php/                 # planned backend files
└── database/            # planned SQL schema and database documentation
```

---

## Development roadmap

- [x] Establish the InsKino visual direction and color palette.
- [x] Prepare the shared navbar and footer concepts.
- [x] Prepare the initial homepage layout.
- [x] Prepare login and registration page layouts.
- [x] Prepare the featured slider and homepage aside.
- [ ] Consolidate and test all frontend pages in the project repository.
- [ ] Finalize the MySQL schema and relationship diagram.
- [ ] Connect PHP to the MySQL database.
- [ ] Implement secure registration and login.
- [ ] Implement movie catalogue, search, and genre filtering.
- [ ] Implement ratings, reviews, watchlists, and user profiles.
- [ ] Complete responsive, functional, and database testing.
- [ ] Prepare final project documentation and presentation.

> Checklist items describe the project status as of the date above. Update this section as work is completed and verified in the repository.

---

## Working together

InsKino is being developed collaboratively by:

- **Muhamet Maliqi**
- **Premtim Ahmeti**

Both contributors are working toward the design, implementation, and completion of the project. Add individual responsibilities, GitHub profile links, and contribution details here as they are agreed and confirmed.

---

## Project note

InsKino is an educational software-development project. Names, poster images, ratings, statistics, and other sample content used in the early prototype are placeholders unless otherwise identified. Replace them with appropriately sourced content and live database data as development progresses.

**InsKino - Made for movie lovers.**
