let isoCountries = require("./isoCountries.js");
$("#submit").on("click", (event) => {
    event.preventDefault();
    let countryCode1 = $(".countrySelect1").val().toLowerCase(),
            countryCode2 = $(".countrySelect2").val().toLowerCase();            
            

    console.log(countryCode1, countryCode2);

    let queryURL = "http://inqstatsapi.inqubu.com/?api_key=01af562d77e556bb&data=medianwage,jobless_rate,bigmac_index,gini,life_expectancy,murder_rate,death_rate,happiness_index,corruption_index,literacy_rate,tax_revenue_total,median_age&countries=" + countryCode1 + "," + countryCode2;

    console.log(queryURL);

    if (countryCode1 !== "" && countryCode2 !== "") {
            $.ajax({
                    url: queryURL,
                    method: "GET"
            }).then(function (res) {
                    console.log(res);
                    $(".trows").text("");



                    if (typeof res === "string") {
                            $("#modalText").text("Data is unavailible for one or more of the countries you requested.");
                            $("#myModal").modal();
                    }

                    $(".country1").text(res[0].countryName);
                    $(".country2").text(res[1].countryName);

                    JSON.stringify(res[0].medianwage) === "[]" ? $(".wages1").text("N/A") : $(".wages1").text("$" + res[0].medianwage[0].data);
                    JSON.stringify(res[1].medianwage) === "[]" ? $(".wages2").text("N/A") : $(".wages2").text("$" + res[1].medianwage[0].data);

                    JSON.stringify(res[0].jobless_rate) === "[]" ? $(".unemployment1").text("N/A") : $(".unemployment1").text(res[0].jobless_rate[0].data + "%");
                    JSON.stringify(res[1].jobless_rate) === "[]" ? $(".unemployment2").text("N/A") : $(".unemployment2").text(res[1].jobless_rate[0].data + "%");

                    JSON.stringify(res[0].bigmac_index) === "[]" ? $(".bigMac1").text("N/A") : $(".bigMac1").text(res[0].bigmac_index[0].data);
                    JSON.stringify(res[1].bigmac_index) === "[]" ? $(".bigMac2").text("N/A") : $(".bigMac2").text(res[1].bigmac_index[0].data);

                    JSON.stringify(res[0].gini) === "[]" ? $(".gini1").text("N/A") : $(".gini1").text(res[0].gini[0].data);
                    JSON.stringify(res[1].gini) === "[]" ? $(".gini2").text("N/A") : $(".gini2").text(res[1].gini[0].data);

                    JSON.stringify(res[0].life_expectancy) === "[]" ? $(".lifeExpetancy1").text("N/A") : $(".lifeExpetancy1").text(res[0].life_expectancy[0].data);
                    JSON.stringify(res[1].life_expectancy) === "[]" ? $(".lifeExpetancy2").text("N/A") : $(".lifeExpetancy2").text(res[1].life_expectancy[0].data);

                    JSON.stringify(res[0].murder_rate) === "[]" ? $(".murderRate1").text("N/A") : $(".murderRate1").text(res[0].murder_rate[0].data);
                    JSON.stringify(res[1].murder_rate) === "[]" ? $(".murderRate2").text("N/A") : $(".murderRate2").text(res[1].murder_rate[0].data);

                    JSON.stringify(res[0].death_rate) === "[]" ? $(".deathRate1").text("N/A") : $(".deathRate1").text(res[0].death_rate[0].data);
                    JSON.stringify(res[1].death_rate) === "[]" ? $(".deathRate2").text("N/A") : $(".deathRate2").text(res[1].death_rate[0].data);

                    JSON.stringify(res[0].happiness_index) === "[]" ? $(".happiness1").text("N/A") : $(".happiness1").text(res[0].happiness_index[0].data);
                    JSON.stringify(res[1].happiness_index) === "[]" ? $(".happiness2").text("N/A") : $(".happiness2").text(res[1].happiness_index[0].data);

                    JSON.stringify(res[0].corruption_index) === "[]" ? $(".corruption1").text("N/A") : $(".corruption1").text(res[0].corruption_index[0].data + "%");
                    JSON.stringify(res[1].corruption_index) === "[]" ? $(".corruption2").text("N/A") : $(".corruption2").text(res[1].corruption_index[0].data + "%");

                    JSON.stringify(res[0].literacy_rate) === "[]" ? $(".literacyRate1").text("N/A") : $(".literacyRate1").text(res[0].literacy_rate[0].data);
                    JSON.stringify(res[1].literacy_rate) === "[]" ? $(".literacyRate2").text("N/A") : $(".literacyRate2").text(res[1].literacy_rate[0].data);

                    JSON.stringify(res[0].tax_revenue_total) === "[]" ? $(".taxes1").text("N/A") : $(".taxes1").text("$" + res[0].tax_revenue_total[0].data);
                    JSON.stringify(res[1].tax_revenue_total) === "[]" ? $(".taxes2").text("N/A") : $(".taxes2").text("$" + res[1].tax_revenue_total[0].data);

                    JSON.stringify(res[0].median_age) === "[]" ? $(".medianAge1").text("N/A") : $(".medianAge1").text(res[0].median_age[0].data);
                    JSON.stringify(res[1].median_age) === "[]" ? $(".medianAge2").text("N/A") : $(".medianAge2").text(res[1].median_age[0].data);
            });

    } else {
            $("#modalText").text("Questionaire Incomplete");
            $("#myModal").modal();
    }

});




for (i in isoCountries) {
    //console.log(isoCountries[i]);
    //console.log(i);

    let option1 = $("<option value=" + i + ">" + isoCountries[i] + "</option>");                        

    $("#browsers").append(option1);                        

}
