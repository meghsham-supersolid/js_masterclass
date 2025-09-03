/* As response to API calls we get json or javascript object notation or array of json

{
    "propertyName" : "value",
    "propertyName" : "value",
    "propertyName" : 123456
}

or

[
    {
        "propertyName" : "value",
        "propertyName" : "value",
        "propertyName" : 123456
    },
    {
        "propertyName" : "value",
        "propertyName" : "value",
        "propertyName" : 123456
    },
    {
        "propertyName" : "value",
        "propertyName" : "value",
        "propertyName" : 123456
    }
]

while handiling this responses the we should always handle the type and null checking as JS will not perform to unless explicitly done by coders.
*/
