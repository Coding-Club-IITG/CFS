import cluster from 'cluster';

if (cluster.isPrimary) {
  require('./main/main.ts');
  cluster.fork();
} else {
  require('./server/main.ts');
}
