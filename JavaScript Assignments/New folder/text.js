async function getdata() {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            res({
                age:45,
                rolln0:78,
                name:"Aarij maniar"
            })
        }, 3000);
    })}

    async function main() {

        console.log(1)
        console.log(2)
        console.log(3)
        console.log(4)
        console.log(5)

        var data = await getdata()

        data

        console.log(data)

        console.log(6)
        console.log(7)
        console.log(8)
        console.log(9)
        console.log(10)

    }

    main()