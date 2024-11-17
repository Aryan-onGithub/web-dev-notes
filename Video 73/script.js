// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")



function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let card = document.createElement("div")
    card.setAttribute("class", "card")
    document.body.querySelector(".container").append(card)

    let Thumbnail = document.createElement("div")
    Thumbnail.setAttribute("class", "thumbnail")
    Thumbnail.innerHTML = `<img src="${thumbnail}" alt="">`
    card.append(Thumbnail)

    /////////////////////////////////////////////////////
    let Duration = document.createElement("span")
    Duration.setAttribute("class", "duration")
        Duration.innerHTML = duration
        card.append(Duration)

        /////////////////////////////////////////////

        let right = document.createElement("div")
        right.setAttribute("class", "right")
        card.append(right)


        let Title = document.createElement("div")
        Title.setAttribute("class", "title")
        Title.innerHTML = title
        right.append(Title)

        let info = document.createElement("div")
        info.setAttribute("class", "info")
        right.append(info)

        let CName = document.createElement("div");
        CName.setAttribute("class", "channel")
        CName.innerHTML = cName
        info.append(CName);

        let Views = document.createElement("div");
        Views.setAttribute("class", "views")


        let a = views

        if (a > 1000000000) {
            a = `${Math.floor(a / 1000000000)}B`
        }
    
        else if (a > 1000000) {
            a = `${Math.floor(a / 1000000)}M`
        }
    
        else if (a > 1000) {
            a = `${Math.floor(a / 1000)}k`
        }

        Views.innerHTML = `${a} views`
        info.append(Views);

        let Month = document.createElement("div");
        Month.setAttribute("class", "month")
        Month.innerHTML = `${monthsOld} months ago`;
        info.append(Month);
    }

    createCard("Aryan", "chillwithAryan", 15313, 2, "12:42", "img.png");

    createCard("mintos zindagi", "Melody", 15313131331, 5, "3:17", "img.png");

    createCard("javaScript exercise 13", "code with harry", 59000, 7, "24:12", "img.png")