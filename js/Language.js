let currentLanguage =
  localStorage.getItem(
    "shootingClubLanguage"
  ) || "th";

function getText(key) {
  return (
    TRANSLATIONS[currentLanguage][key] ||
    TRANSLATIONS.th[key] ||
    key
  );
}

function changeLanguage(language) {
  if (
    language !== "th" &&
    language !== "en"
  ) {
    return;
  }

  currentLanguage = language;

  localStorage.setItem(
    "shootingClubLanguage",
    language
  );

  applyLanguage();
}

function applyLanguage() {
  document.documentElement.lang =
    currentLanguage;

  document.getElementById(
    "pageTitle"
  ).textContent =
    getText("pageTitle");

  document.getElementById(
    "pageSubtitle"
  ).textContent =
    getText("pageSubtitle");

  document.getElementById(
    "studentTypeButton"
  ).textContent =
    getText("student");

  document.getElementById(
    "personnelTypeButton"
  ).textContent =
    getText("personnel");

  document.getElementById(
    "name"
  ).placeholder =
    getText("fullName");

  updateLanguageButtons();
  updateMemberTypeLanguage();
}

function updateLanguageButtons() {
  const thaiButton =
    document.getElementById(
      "thaiLanguageButton"
    );

  const englishButton =
    document.getElementById(
      "englishLanguageButton"
    );

  thaiButton.classList.toggle(
    "active",
    currentLanguage === "th"
  );

  englishButton.classList.toggle(
    "active",
    currentLanguage === "en"
  );
}

function updateMemberTypeLanguage() {
  const idInput =
    document.getElementById(
      "universityId"
    );

  if (memberType === "Student") {
    idInput.placeholder =
      getText("studentId");

    renderStudentAffiliations();

  } else {
    idInput.placeholder =
      getText("personnelId");

    renderPersonnelAffiliations();
  }

  if (!isSubmitting) {
    const button =
      document.getElementById(
        "registerButton"
      );

    if (!button.disabled) {
      button.textContent =
        getText("register");
    }
  }
}
    let memberType = "Student";
    let lineIdToken = "";
    let isSubmitting = false;
    let resultPollTimer = null;
    let currentRequestId = "";
