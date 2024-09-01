enum UploadStatus {
    InProgress,
    Pending,
    Failed,
    Uploaded,
}

enum Connectors {
    AWS3 = 'AWS-S3',
    GoogleDrive = 'Google Drive',
    OneDrive = 'One Drive',
}

enum MimeTypes {
    csv = 'text/csv',
    bin = 'application/octet-stream',
    mp4 = 'video/mp4',
    jpg = 'image/jpeg',
    mpeg = 'video/mpeg',
}