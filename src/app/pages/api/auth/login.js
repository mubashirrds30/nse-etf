export default function handler(req, res) {
    console.log('enter in handler');
    res.status(200).json({ message: 'Hello from the users API endpoint!' });
}