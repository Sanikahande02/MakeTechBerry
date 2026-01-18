import { CheckCircle } from "lucide-react";

/**
 * File upload component for resume
 */
const FileUpload = ({ file, onChange, error, accept = ".pdf,application/pdf" }) => {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-medium mb-2">
        Upload Resume (PDF only) <span className="text-red-500">*</span>
      </label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-[#9062FF] transition-colors">
        <input
          type="file"
          accept={accept}
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              onChange(selectedFile);
            }
          }}
          className="hidden"
          id="resume-upload"
        />
        <label
          htmlFor="resume-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          {file ? (
            <>
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 mb-2" />
              <p className="text-xs sm:text-sm font-medium text-gray-700 break-words px-2">
                {file.name}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                Click to change file
              </p>
            </>
          ) : (
            <>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#9062FF] bg-opacity-10 rounded-full flex items-center justify-center mb-2 mx-auto">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#9062FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-700">
                Click to upload resume
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                PDF files only
              </p>
            </>
          )}
        </label>
      </div>
      {error && (
        <p className="text-red-500 text-xs sm:text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default FileUpload;
