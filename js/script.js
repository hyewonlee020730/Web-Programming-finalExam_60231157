$(document).ready(function () {
  console.log("Ready");
});

// 지옥
$(document).ready(function () {
  const ghast = $(".Ghast");
  const originalBackground = "img/ghast1.gif";
  const BackgroundChange = "img/GhastFireBall.gif";
  const fireballDuration = 3000;

  ghast.on("click", function () {
    const currentBackground = ghast.css("background-image");

    if (currentBackground.includes("ghast1.gif")) {
      const newBackgroundChange = `${BackgroundChange}?t=${new Date().getTime()}`;
      ghast.css("background-image", `url("${newBackgroundChange}")`);

      setTimeout(() => {
        const newOriginalBackground = `${originalBackground}?t=${new Date().getTime()}`;
        ghast.css("background-image", `url("${newOriginalBackground}")`);
      }, fireballDuration);
    }
  });
});

$(document).ready(function () {
  const piglin = $(".Piglin");
  const originalBackground = "../img/Piglin2.gif";
  const BackgroundChange = "../img/Piglin1.gif";

  const PiglinDuration = 5100;

  piglin.on("click", function () {
    const currentBackground = piglin.css("background-image");

    if (currentBackground.includes("Piglin2.gif")) {
      const newBackgroundChange = `${BackgroundChange}?t=${new Date().getTime()}`;
      piglin.css("background-image", `url("${newBackgroundChange}")`);

      setTimeout(() => {
        const newOriginalBackground = `${originalBackground}?t=${new Date().getTime()}`;
        piglin.css("background-image", `url("${newOriginalBackground}")`);
      }, PiglinDuration);
    }
  });
});

$(document).ready(function () {
  const zpiglin = $(".Zombie_Piglin");
  const originalBackground = "../img/Zombie_Piglin1.gif";
  const BackgroundChange = "../img/Zombie_Piglin2.gif";

  const ZPiglinDuration = 8100;

  zpiglin.on("click", function () {
    const currentBackground = zpiglin.css("background-image");

    if (currentBackground.includes("Zombie_Piglin1.gif")) {
      const newBackgroundChange = `${BackgroundChange}?t=${new Date().getTime()}`;
      zpiglin.css("background-image", `url("${newBackgroundChange}")`);

      setTimeout(() => {
        const newOriginalBackground = `${originalBackground}?t=${new Date().getTime()}`;
        zpiglin.css("background-image", `url("${newOriginalBackground}")`);
      }, ZPiglinDuration);
    }
  });
});

$(document).ready(function () {
  const strider = $(".Strider");
  const originalBackground = "../img/Strider1.gif";
  const BackgroundChange = "../img/Strider2.gif";

  const StriderDuration = 2500;

  strider.on("click", function () {
    const currentBackground = strider.css("background-image");

    if (currentBackground.includes("Strider1.gif")) {
      const newBackgroundChange = `${BackgroundChange}?t=${new Date().getTime()}`;
      strider.css("background-image", `url("${newBackgroundChange}")`);

      setTimeout(() => {
        const newOriginalBackground = `${originalBackground}?t=${new Date().getTime()}`;
        strider.css("background-image", `url("${newOriginalBackground}")`);
      }, StriderDuration);
    }
  });
});

///지상

$(document).ready(function () {
  const steve = $(".steve");
  const originalBackground = "../img/Steve1.gif";
  const BackgroundChange = "../img/Steve2.gif";

  const SteveDuration = 3000;

  steve.on("click", function () {
    const currentBackground = steve.css("background-image");

    if (currentBackground.includes("Steve1.gif")) {
      const newBackgroundChange = `${BackgroundChange}?t=${new Date().getTime()}`;
      steve.css("background-image", `url("${newBackgroundChange}")`);

      setTimeout(() => {
        const newOriginalBackground = `${originalBackground}?t=${new Date().getTime()}`;
        steve.css("background-image", `url("${newOriginalBackground}")`);
      }, SteveDuration);
    }
  });
});

$(document).ready(function () {
  const skeleton = $(".Skeleton");
  const originalBackground = "../img/Skeleton1.gif";
  const BackgroundChange = "../img/Skeleton2.gif";

  const SkeletonDuration = 4000;

  skeleton.on("click", function () {
    const currentBackground = skeleton.css("background-image");

    if (currentBackground.includes("Skeleton1.gif")) {
      const newBackgroundChange = `${BackgroundChange}?t=${new Date().getTime()}`;
      skeleton.css("background-image", `url("${newBackgroundChange}")`);

      setTimeout(() => {
        const newOriginalBackground = `${originalBackground}?t=${new Date().getTime()}`;
        skeleton.css("background-image", `url("${newOriginalBackground}")`);
      }, SkeletonDuration);
    }
  });
});

$(document).ready(function () {
  const zombie = $(".Zombie");
  const originalBackground = "../img/Zombie1.gif";
  const BackgroundChange = "../img/Zombie2.gif";

  const ZombieDuration = 2500;

  zombie.on("click", function () {
    const currentBackground = zombie.css("background-image");

    if (currentBackground.includes("Zombie1.gif")) {
      const newBackgroundChange = `${BackgroundChange}?t=${new Date().getTime()}`;
      zombie.css("background-image", `url("${newBackgroundChange}")`);

      setTimeout(() => {
        const newOriginalBackground = `${originalBackground}?t=${new Date().getTime()}`;
        zombie.css("background-image", `url("${newOriginalBackground}")`);
      }, ZombieDuration);
    }
  });
});

$(document).ready(function () {
  $(".Chicken").on("click", function () {
    $(this).toggleClass("moving");
  });
});

$(document).ready(function () {
  $(".Creeper").on("click", function () {
    const creeper = $(this);
    const diamond = $(".diamond");
    const dirt = $(".dirt");
    const rock = $(".rock");
    const coal1 = $(".coal");
    const coal2 = $(".coal2");

    creeper.css("background-image", "url('../img/Creeper2.gif')");

    const creeperDuration = 1500;

    setTimeout(function () {
      creeper.addClass("hidden");

      setTimeout(function () {
        dirt.addClass("hidden");
      }, 500);

      setTimeout(function () {
        rock.addClass("hidden");
      }, 300);

      setTimeout(function () {
        coal1.addClass("hidden");
      }, 400);

      setTimeout(function () {
        coal2.addClass("hidden");
      }, 450);

      setTimeout(function () {
        diamond.addClass("hidden");
      }, 500);
    }, creeperDuration);
  });
});

//엔드
$(document).ready(function () {
  const shulker = $(".Shulker");
  const originalBackground = "../img/Shulker1.gif";
  const BackgroundChange = "../img/Shulker2.gif";

  const ShulkerDuration = 2500;

  shulker.on("click", function () {
    const currentBackground = shulker.css("background-image");

    if (currentBackground.includes("Shulker1.gif")) {
      const newBackgroundChange = `${BackgroundChange}?t=${new Date().getTime()}`;
      shulker.css("background-image", `url("${newBackgroundChange}")`);

      setTimeout(() => {
        const newOriginalBackground = `${originalBackground}?t=${new Date().getTime()}`;
        shulker.css("background-image", `url("${newOriginalBackground}")`);
      }, ShulkerDuration);
    }
  });
});

$(document).ready(function () {
  const enderman = $(".Enderman");

  const positions = [
    { top: "320px", left: "320px" },
    { top: "320px", left: "200px" },
    { top: "39px", left: "180px" },
    { top: "280px", left: "0px" },
  ];

  let isMoving = true;

  function getRandomPosition() {
    const randomIndex = Math.floor(Math.random() * positions.length);
    return positions[randomIndex];
  }

  function getRandomFlip() {
    return Math.random() > 0.5 ? "scaleX(1)" : "scaleX(1)";
  }

  function moveEnderman() {
    if (isMoving) {
      const randomPosition = getRandomPosition();
      const randomFlip = getRandomFlip();

      enderman.css("visibility", "hidden");

      setTimeout(function () {
        enderman.css({
          top: randomPosition.top,
          left: randomPosition.left,
          visibility: "visible",
        });

        enderman.css("transform", randomFlip);

        setTimeout(function () {
          if (isMoving) {
            moveEnderman();
          }
        }, 3000);
      }, 500);
    }
  }

  enderman.on("click", function () {
    if (isMoving) {
      isMoving = false;
      enderman.css("visibility", "visible");
    } else {
      isMoving = true;
      moveEnderman();
    }
  });

  moveEnderman();
});

$(document).ready(function () {
  const eDragon = $(".E_Dragon");
  const dragonFBDuration = 15000;

  eDragon.on("click", function () {
    $(".E_DragonFB").remove();
    const EDragonFB = $("<div class='E_DragonFB'></div>");
    EDragonFB.css({
      "background-image": "url('../img/E_DragonFB.gif')",
      "background-size": "100% 100%",
      width: "155.91px",
      height: "185px",
      display: "flex",
      top: "90px",
      left: "30px",
      position: "absolute",
      "z-index": "100",
    });

    $(".end-back").append(EDragonFB);

    setTimeout(function () {
      EDragonFB.remove();
    }, dragonFBDuration);
  });
});
