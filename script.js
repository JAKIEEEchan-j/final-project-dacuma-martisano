// ===== ANNOUNCEMENTS DATA =====
// Each announcement is an object with 3 properties:
// title, date (YYYY-MM-DD), and description
const announcements = [
  {
    // First announcement
    title: "Class Suspension",
    date: "2026-11-18",
    description: "All classes are suspended tomorrow due to heavy rain.",
 fullDetails: "All classes are suspended tomorrow because of heavy rain. Please stay safe at home. Your instructors may post make-up work online."
},
  {
    // Second announcement
    title: "Enrollment Period",
    date: "2026-11-10",
    description: "Enrollment for next semester starts on December 1.",
    fullDetails: "Enrollment for next semester starts on December 1 and ends on December 10. Bring your grade slip and clearance to the registrar's office."

  },
  {
    // Third announcement
    title: "Midterm Deadline",
    date: "2026-11-15",
    description: "Submit all midterm requirements before November 25.",
    fullDetails: "Submit all midterm requirements to your instructors before November 25. Late submissions may not be accepted."
  },
  {
    title: "Foundation Day Program",
    date: "2026-11-19",
    description: "Join us at the gym for the Foundation Day program.",
    fullDetails: "The Foundation Day program starts at 8 AM at the gym. Wear your school uniform and bring your ID."

  },
  {
    title: "Library Extended Hours",
    date: "2026-11-12",
    description: "The library stays open until 8 PM during exam week.",
    fullDetails: "During exam week, the library is open from 8 AM to 8 PM. Please bring your ID to borrow books."
  },
  {
    title: "Scholarship Applications",
    date: "2026-11-05",
    description: "Applications for the scholarship program are now open.",
    fullDetails: "Applications are open until December 15. Get the form at the Student Affairs office and attach a copy of your grades."
  }
];

// ===== SHOW ANNOUNCEMENTS =====
function showAnnouncements() {
  // Find the empty container from index.html
  const list = document.getElementById("announcement-list");

  // Make a sorted COPY of the array, newest date first,
  // then keep only the first 5 announcements (AC1)
  const sorted = [...announcements]
    .sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);  // newest date first
    })
    .slice(0, 5);  // take items from position 0 up to (not including) 5

  // Loop through each announcement, one at a time
  sorted.forEach(function (item) {
    // Make the card that holds one announcement
    const card = document.createElement("article");
    card.className = "announcement-card";

    // Make the title, date and description (AC2)
    const title = document.createElement("h3");
    title.textContent = item.title;
    const date = document.createElement("p");
    date.className = "announcement-date";
    date.textContent = item.date;
    const description = document.createElement("p");
    description.textContent = item.description;

    // ===== FULL DETAILS (AC3) =====
    // <details> makes a box that opens and closes when clicked
    const more = document.createElement("details");

    // <summary> is the clickable label that is always visible
    const summary = document.createElement("summary");
    summary.textContent = "Read full details";

    // This paragraph holds the long text, shown only when opened
    const fullDetails = document.createElement("p");
    fullDetails.textContent = item.fullDetails;

    // Put the label and the long text inside the <details> box
    more.append(summary, fullDetails);

    // Put all the pieces in the card, then the card in the list
    card.append(title, date, description, more);
    list.appendChild(card);
  });
}

// ===== RUN IT =====
showAnnouncements();