
const  dk = {
        in: "rmia",
        out: "docker rmi $(docker ps -a -q)"
    },
 dkc =  {
        ub: {
            out: "docker-compose up --build",
            descr: "docker-compose up build"
        },
        u: {
            out: "docker-compose up --build",
            descr: "docker-compose up build"
        }
    }

module.exports = {
dk,
dkc
}
