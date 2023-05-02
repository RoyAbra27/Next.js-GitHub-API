import RepoDirs from '@/app/components/RepoDirs';
import Repo from '@/app/components/repo';
import Link from 'next/link';
import { Suspense } from 'react';
const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name}></RepoDirs>
      </Suspense>
    </div>
  );
};

export default RepoPage;
