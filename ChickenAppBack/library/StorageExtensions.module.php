<?php
namespace Chicken\Library;

use Google\Cloud\Storage\StorageClient;

    class Storage{
        private $projectId;
        private $storage;

        public function __construct()
        {
            $this->projectId='chickenapp-dev';
            $this->storage= new StorageClient([
                'projectId' => $this->projectId,
            ]);
        }

        public function createBucket($bucketName)
        {
            $bucket=$this->storage->createBucket($bucketName);
        }

        public function listBuckets()
        {
            $buckets = $this->storage->buckets();
        }

        public function uploadObject($bucketName, $objectName, $source)
        {
            $storage = new StorageClient();
            $file=fopen($source,'r');
            $bucket=$storage->bucket($bucketName);
            $object = $bucket->upload($file, ['name'=>$objectName]);
        }
        
        /*function auth_cloud_implicit($projectId)
        {
        $config = [
                'projectId' => $this->projectId,
            ];

        # If you don't specify credentials when constructing the client, the
        # client library will look for credentials in the environment.
        $storage = new StorageClient($config);

        # Make an authenticated API request (listing storage buckets)
        foreach ($storage->buckets() as $bucket) {
            printf('Bucket: %s' . PHP_EOL, $bucket->name());
        }
        }*/
    }


?>