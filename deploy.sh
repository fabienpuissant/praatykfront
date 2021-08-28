aws s3 rm s3://praatykfront/ --recursive --profile praatyk
aws s3 sync build/ s3://praatykfront/ --profile praatyk