var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard;
var membershipReverce = Membership[2];
console.log(membershipReverce);
var Social;
(function (Social) {
    Social["VK"] = "vk";
    Social["Instagram"] = "Instagram";
})(Social || (Social = {}));
var socialInst = Social.Instagram;
console.log(socialInst);
