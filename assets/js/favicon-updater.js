if(window.matchMedia)
{
    var newColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

    switch(newColorScheme) {
        case "dark":
            document.getElementById("favicon").setAttribute("href", "/assets/img/favicon-8.ico");
            break;
        case "light":
            document.getElementById("favicon").setAttribute("href", "/assets/img/favicon-7.ico");
            break;
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        newColorScheme = event.matches ? "dark" : "light";

        switch(newColorScheme) {
            case "dark":
                document.getElementById("favicon").setAttribute("href", "/assets/img/favicon-8.ico");
                break;
            case "light":
                document.getElementById("favicon").setAttribute("href", "/assets/img/favicon-7.ico");
                break;
        }
    });
}