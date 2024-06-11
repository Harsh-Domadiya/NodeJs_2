const tweetModel = require("../model/tweet")

async function tweetFetch(req, res) {
    try {
        const userId = req._id;
        const tweet = await tweetModel.find({})
        return res.send({
            message: "Data fetched successfully",
            data: tweet,
            status: true
        })

    } catch (error) {
        res.send({
            message: "Something went wrong",
            data: null,
            status: false
        })
    }
}
async function tweetUpload(req, res) {
    try {
        const userId = req.user._id;
        const { description, media } = req.body;

        const tweet = await tweetModel.create({
            userId: userId,
            description: description,
            media: media,
        })

        res.send({
            message: "Tweet uploaded successfully",
            data: tweet,
            status: true
        })
    } catch (error) {
        res.send({
            message: "Something went wrong",
            data: null,
            status: false
        })
    }
}



async function tweetupadate(req, res) {
    try {
        const tweetId = req.params.id;
        const { description, media } = req.body;
        const updatetweet = await tweetModel.updateOne({ _id: tweetId }, {
            $set: {
                description: description,
                media: media,
                updateAt: new Date(),
                edit: true,
            }
        })
        // res.header('Content-Type', 'application/json');

        return res.send({
            message: "Tweet updated successfully",
            data: updatetweet,
            status: true
        })

    }
    catch (error) {
        res.send({
            message: "Something went wrong",
            data: null,
            status: false
        })
    }
}

async function tweetdelate(req, res) {
    try {
        const tweetId = req.params.id;
        // const deletetweet = await tweetModel.deleteOne(tweetId)
        // const deletetweet = await tweetModel.findOneAndDelete(tweetId)
        const deletetweet = await tweetModel.findByIdAndDelete(tweetId)
        console.log(deletetweet); 
        return res.send({
            message: "Tweet deleted successfully",
            data: deletetweet,
            status: true
        })
    }
    catch (error) {
        res.send({
            message: "Something went wrong",
            data: null,
            status: false
        })
    }
}

module.exports = {
    tweetFetch,
    tweetUpload,
    tweetupadate,
    tweetdelate
}